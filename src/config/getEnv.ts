const getEnv = (args: { key: string; value?: string }): string => {
  const { key, value = undefined } = args;
  const valueFromEnv = process.env[key] as string;

  if (valueFromEnv === undefined && value === undefined) {
    throw new Error(`The key ${key} no exist in process.env`);
  }

  if (valueFromEnv === undefined && value !== undefined) {
    return value;
  }

  return valueFromEnv;
};

export default getEnv;
