import type { TSchema, Static } from "elysia";

export type Sch2Ts<T extends TSchema> = Static<T>