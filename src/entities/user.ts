import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
@Entity("users")
class User {
    @PrimaryColumn()
    readonly id!: string;
    @Column()
    name!: string;
    @Column()
    email!: string;
    @Column()
    admin!: boolean;
    @Column()
    password!: string;
    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
export { User };