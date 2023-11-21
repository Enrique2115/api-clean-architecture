import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './user.entity'

@Entity()
export class RefreshToken {
  @PrimaryGeneratedColumn()
  oid_refresh_token!: string

  @Column()
  token!: string

  @ManyToOne(() => User, user => user.refreshTokens)
  user!: User
}
