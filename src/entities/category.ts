import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

import {v4 as uuid} from "uuid"
@Entity("category")
class Category{
    @PrimaryGeneratedColumn()
    readonly id!: string
    @Column()
    name!: string
    @Column()
    description!: string
    @CreateDateColumn()
    created_at!: Date
    @UpdateDateColumn()
    updated_at!: Date
    constructor(){
        if (!this.id){
            this.id = uuid()
        }
    }
}