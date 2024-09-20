import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("client")
class Client{
    @PrimaryColumn()
    readonly id!: string
    @Column()
    name!: string
    @Column()
    email!: string
    @Column()
    cpf!: string
    @Column()
    address!: string
    @Column()
    phone!: string
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

export {Client}

        /*name: name,
        email:email,
        cpf:cpf,
        address:address,
        phone:phone*/