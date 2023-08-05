import { Transaction } from "src/transaction/entities/transaction.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Category {
  @PrimaryGeneratedColumn({name: 'category_id'})
  id: number

  @Column() 
  title: string

  @ManyToMany(() => User, (user) => user.categiries)
  @JoinTable({name: 'user_id'})
  user: User

  @OneToMany(() => Transaction, (transaction) => transaction.category)
  transactions: Transaction[]
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updateAt: Date;
}
