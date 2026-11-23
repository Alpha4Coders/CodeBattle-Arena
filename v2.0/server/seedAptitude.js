import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { AptitudeDBHandler } from "./aptitudeDatabase.js";
import { getCheatSheetForTopic } from "./aptitudeCheatSheets.js";
import {
    QUANTITATIVE_TOPICS,
    LOGICAL_TOPICS,
    VERBAL_TOPICS,
    ALL_TOPICS
} from "./aptitudeTopics.js";
import {
    SPEED_TIME_DISTANCE_CHEATSHEET,
    generateQuestionsForSet
} from "./aptitudeQuestionsData.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "../.env") });

export {
    QUANTITATIVE_TOPICS,
    LOGICAL_TOPICS,
    VERBAL_TOPICS,
    ALL_TOPICS,
    SPEED_TIME_DISTANCE_CHEATSHEET,
    generateQuestionsForSet
};

/**
 * Seed database with all topics and questions
 */
export async function seedAptitudeDatabase() {
    try {
        console.log("[Aptitude Seed] Starting database seeding...");

        for (const topicData of ALL_TOPICS) {
            const cheatSheet = getCheatSheetForTopic(topicData.topicId, topicData.title, topicData.category, topicData.description);

            await AptitudeDBHandler.Topics.findOneAndUpdate(
                { topicId: topicData.topicId },
                {
                    $set: {
                        topicId: topicData.topicId,
                        category: topicData.category,
                        title: topicData.title,
                        description: topicData.description,
                        icon: topicData.icon,
                        order: topicData.order,
                        cheatSheet
                    }
                },
                { upsert: true, new: true }
            );

            // Generate 4 Practice Sets (30 Qs each) + 2 Mock Sets (30 Qs each)
            for (let setNum = 1; setNum <= 4; setNum++) {
                const practiceQs = generateQuestionsForSet(topicData, 'practice', setNum);
                for (const q of practiceQs) {
                    await AptitudeDBHandler.Questions.findOneAndUpdate(
                        { questionId: q.questionId },
                        { $set: q },
                        { upsert: true }
                    );
                }
            }

            for (let setNum = 1; setNum <= 2; setNum++) {
                const mockQs = generateQuestionsForSet(topicData, 'mock', setNum);
                for (const q of mockQs) {
                    await AptitudeDBHandler.Questions.findOneAndUpdate(
                        { questionId: q.questionId },
                        { $set: q },
                        { upsert: true }
                    );
                }
            }
        }

        console.log(`[Aptitude Seed] Successfully seeded ${ALL_TOPICS.length} topics and all sets!`);
    } catch (error) {
        console.error("[Aptitude Seed] Failed to seed database:", error);
        throw error;
    }
}
