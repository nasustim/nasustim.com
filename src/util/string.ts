export const joinStr = (...classNames: (string | null)[]): string => classNames.filter((v) => !!v).join(' ')
