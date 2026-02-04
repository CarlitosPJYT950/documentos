export type company = {
    name: string;
    address: string;
    phone: string;
}

type UserId = {readonly id: string | number};

export type User = {
    readonly name: string;
    readonly age: number;
    email?: string;
    company?: company;
    role: "admin" | "user" | "guest";
}

type UserEntity = User & UserId;

const entity: UserEntity = {
    id: 1,
    name: "EntityName",
    age: 5,
    role: "guest",
    email: "juanpana10ospina@gmail.com"
};

export type Configuration = {
    readonly apiKey: string;
    readonly theme: "light" | "dark";
}