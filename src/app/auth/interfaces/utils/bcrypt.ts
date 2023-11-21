import bcrypt from 'bcrypt'
/**
 * This function handles bcrypt.
 *
 * @return {Object} An object containing the hashPassword and comparePassword functions.
 */
export function handleBcrypt(): {
  hashPassword: (password: string) => Promise<string>
  comparePassword: (
    inputPassword: string,
    passwordBD: string
  ) => Promise<boolean>
} {
  /**
   * Hashes a password using bcrypt.
   *
   * @param {string} password - The password to be hashed.
   * @return {Promise<string>} - Returns a promise that resolves with the hashed password.
   */
  async function hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(12)
    const hash = await bcrypt.hash(password, salt)
    return hash
  }

  /**
   * Compares a given input password with a password stored in the database.
   *
   * @param {string} inputPassword - The password provided by the user.
   * @param {string} passwordBD - The password stored in the database.
   * @return {Promise<boolean>} A boolean indicating whether the input password matches the password in the database.
   */
  async function comparePassword(
    inputPassword: string,
    passwordBD: string
  ): Promise<boolean> {
    const isValid = await bcrypt.compare(inputPassword, passwordBD)
    return isValid
  }

  return {
    hashPassword,
    comparePassword,
  }
}
