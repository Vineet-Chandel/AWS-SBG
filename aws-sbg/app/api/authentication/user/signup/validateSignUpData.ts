import validator from "validator";
interface IDetails {
    firstName: string;
    lastName: string;
    gmail: string;
    password: string;
    termsAccepted: boolean;
}

const weakPatterns: string[] = [
    // Sequential digits
    '1234', '12345', '123456', '1234567', '12345678', '123456789',
    '0123456789', '1234567890', '0987654321',
    '234567', '345678', '456789', '567890',
    '987654', '876543', '765432', '654321',

    // Repeated single characters
    '111111', '222222', '333333', '444444', '555555',
    '666666', '777777', '888888', '999999', '000000',
    'aaaaaa', 'bbbbbb', 'cccccc', 'zzzzzz', 'AAAAAA', 'BBBBBB',

    // Doubled words
    'hellohello', 'passwordpassword', 'adminadmin', 'abcabcabc', 'loveLoveLove',

    // Keyboard row/pattern walks
    'qwerty', 'qwertyui', 'qwerty123', 'qwertyuiop',
    'asdfgh', 'asdfghjkl',
    'zxcvbn', 'zxcvbnm',
    '1q2w3e', '1qaz2wsx', 'qazwsx', 'zaq12wsx',
    'poiuyt', 'lkjhg', 'mnbvc',
    '1qaz', '2wsx', '3edc',

    // Alphabet sequences
    'abc', 'abcd', 'abcde', 'abcdef', 'abcdefg', 'abcdefgh',
    'abcdefghijklmnopqrstuvwxyz',
    'zyx', 'zyxw', 'zyxwvuts',

    // Repeating short blocks
    '12121212', 'abababab', 'abcabcabc', 'xyzxyzxyz',

    // Calendar words
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december',
    'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday',

    // "password" variants
    'password', 'Password', 'PASSWORD', 'Password1', 'Password123',
    'P@ssword', 'P@ssword1', 'password1', 'password123', 'passw0rd',

    // Default/system credentials
    'admin', 'administrator', 'guest', 'welcome',
    'letmein', 'login', 'root', 'default', 'changeme',
    'user', 'test', 'demo', 'system',

    // Common pets/animals
    'dog', 'cat', 'tiger', 'lion', 'monkey', 'dragon', 'shadow',

    // Common first names
    'john', 'michael', 'david', 'james', 'daniel', 'robert', 'jennifer',

    // Pop culture / fictional characters
    'avatar', 'batman', 'superman', 'spiderman', 'harrypotter', 'ironman',

    // Sports
    'football', 'cricket', 'soccer', 'basketball', 'baseball',

    // Sentiment / phrase-based
    'iloveyou', 'trustno1', 'sunshine', 'master', 'freedom', 'whatever',
    'starwars', 'princess', 'monkey123', 'flower', 'hunter2',
];
const validateSignUpData = (data: unknown): IDetails => {
    if (!data || typeof data !== "object") {
        throw new Error("Invalid request body.");
    }

    const body = data as Record<string, unknown>;
    const { firstName, lastName, gmail, password, termsAccepted } = body;

    if (
        typeof firstName !== "string" ||
        typeof lastName !== "string" ||
        typeof gmail !== "string" ||
        typeof password !== "string"
    ) {
        throw new Error("All required fields must be provided.");
    }
    const normalizedFirstName = firstName.trim();
    const normalizedLastName = lastName.trim();
    const normalizedEmail = gmail.trim().toLowerCase();
    if (!normalizedFirstName || !normalizedLastName || !normalizedEmail || !password) {
        throw new Error("All required fields must be provided.")
    }
    if (termsAccepted !== true) {
        throw new Error("Please accept the terms and conditions.")
    }
    if (!validator.isEmail(normalizedEmail)) {
        throw new Error("Please provide the valid email address.")
    }
    if (password.length < 8) {
        throw new Error("Password must contain at least 8 characters.")
    }

    if (
        !validator.isStrongPassword(password, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
        })
    ) {
        throw new Error(
            "Password must contain uppercase, lowercase, number, and special character."
        );
    }
    const normalizedPassword = password.toLowerCase();

    const containsWeakPattern = weakPatterns.some((pattern) =>
        normalizedPassword.includes(pattern.toLowerCase())
    );
    if (containsWeakPattern) {
        throw new Error("Please choose a stronger password.");
    }
    return {
        firstName: normalizedFirstName,
        lastName: normalizedLastName,
        gmail: normalizedEmail,
        password,
        termsAccepted: true,
    };
}

export default validateSignUpData;