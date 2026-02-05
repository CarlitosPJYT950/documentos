const company = {
    name: "string",
    address: "string",
    phone: "string"
}

const User = {
    name: "string",
    age: "number",
    email: "string",
    company: "company",
    role: "admin" | "user" | "guest",
}

const entity = {
    id: 1,
    name: "EntityName",
    age: 5,
    role: "guest",
    email: "juanpana10ospina@gmail.com"
};

const Configuration = {
    apiKey: "string",
    theme: "light" | "dark"
}

console.log(company, User, entity, Configuration);