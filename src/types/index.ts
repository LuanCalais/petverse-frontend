export enum PET_SPECIES {
  DOG = 'DOG',
  CAT = 'CAT',
  BIRD = 'BIRD',
  RABBIT = 'RABBIT',
  HAMSTER = 'HAMSTER',
  FISH = 'FISH',
  REPTILE = 'REPTILE',
  OTHER = 'OTHER',
}

export enum PET_GENDER {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export enum PET_SIZE {
  TINY = 'TINY',
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  GIANT = 'GIANT',
}

export interface User {
  id: number
  name: string
  email: string
  phone?: string
  bio?: string
  profileImageUrl?: string
  active: boolean
  createdAt: string
  updatedAt: string
  pets: Pet[]
}

export interface Pet {
  id: number
  name: string
  species: PET_SPECIES
  breed?: string
  gender: PET_GENDER
  size?: PET_SIZE
  birthDate?: string
  weight?: number
  bio?: string
  profileImageUrl?: string
  microchipNumber?: string
  active: boolean
  createdAt: string
  updatedAt: string
  owner: User
  ageInYears?: number
}

export interface Post {
  id: number
  content: string
  owner: User
  pets: Pet[]
  active: boolean
  createdAt: string
  updatedAt: string
}

export interface LoginForm {
  email: string
  password: string
}

export interface RegisterForm {
  name: string
  email: string
  password: string
  confirmPassword: string
  phone?: string
}

export interface CreatePetForm {
  name: string
  species: PET_SPECIES | ''
  breed?: string
  gender: PET_GENDER | ''
  size?: PET_SIZE | ''
  birthDate?: string
  weight?: number
  bio?: string
}

export interface CreatePostForm {
  content: string
  petIds: number[]
}

export interface ApiResponse<T> {
  data: T
  message?: string
}

export interface PaginatedResponse<T> {
  content: T[]
  totalElements: number
  totalPages: number
  page: number
  size: number
}