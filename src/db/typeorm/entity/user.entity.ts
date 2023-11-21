import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm'
import { Role } from './role.entity'
import { RefreshToken } from './refresh-token.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  oid_user!: string

  @Column({
    unique: true,
    nullable: false,
  })
  username!: string

  @Column({
    unique: true,
    nullable: false,
  })
  email!: string

  @Column()
  password!: string

  @Column({
    nullable: true,
  })
  token!: string

  @Column({
    nullable: true,
    default: false,
  })
  status!: boolean

  @CreateDateColumn()
  created_at!: Date

  @UpdateDateColumn()
  updated_at!: Date

  @ManyToMany(() => Role, role => role.users)
  @JoinTable({
    name: 'user_role',
    joinColumn: {
      name: 'user_oid_user',
      referencedColumnName: 'oid_user',
    },
    inverseJoinColumn: {
      name: 'role_oid_role',
      referencedColumnName: 'oid_role',
    },
  })
  roles!: Role[]

  @OneToMany(() => RefreshToken, refreshToken => refreshToken.user)
  refreshTokens!: RefreshToken[]
}
