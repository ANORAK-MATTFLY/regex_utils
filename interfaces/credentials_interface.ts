export interface credentials {
    Is_Name(name: string): boolean;
    Is_Email(email: string): boolean;
    Is_Password_with_At_Least_Eight_Characters_An_Uppercase_Letter_A_Lowercase_Letter_One_Number_A_Special_Character(password: string): boolean;
}