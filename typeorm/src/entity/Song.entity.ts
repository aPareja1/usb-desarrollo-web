import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
  } from "typeorm";
  
  @Entity({ name: "songs" })
  export class Song extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column({ nullable: false })
    title: string;
  
    @Column({ nullable: false })
    artist: string;
  
    @Column({ nullable: false })
    album: string;
  
    @Column({  type: 'int4'})
    year: number;
    
    @Column({ nullable: false })
    genre: string;

     
    @Column({ type: 'interval' })
    duration: string;
  

  
  }