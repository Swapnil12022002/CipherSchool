import express, { Router } from "express";

router = express.Router();

router.post("/signIn", signIn);

router.post("/signup", signup);
