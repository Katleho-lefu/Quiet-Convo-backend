import * as mongoose from 'mongoose'

export const CarSchema = new mongoose.Schema({

    brand: String,
    color: String,
    model: String,
});

export interface CarModel{
    id: string;
    brand: string;
    color: string;
    model: string
}
