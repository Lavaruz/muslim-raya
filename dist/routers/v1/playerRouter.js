"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const playerController_1 = require("../../controllers/v1/playerController");
const router = express_1.default.Router();
router.get("/", playerController_1.GetAllPlayers);
router.get("/auth/google", passport_1.default.authenticate('google', { scope: ['profile', 'email'] }));
router.get("/auth/google/callback", passport_1.default.authenticate('google', { failureRedirect: '/', session: false }), playerController_1.LoginWithGoogle);
router.get("/:id", playerController_1.GetPlayersByID);
router.put("/:id", playerController_1.UpdatePlayerDataByID);
exports.default = router;
//# sourceMappingURL=playerRouter.js.map