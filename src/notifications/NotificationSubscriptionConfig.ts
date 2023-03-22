type NotificationSubscriptionUsecase = {
  deviceToken: string,
}

const subscribe = async ({ deviceToken }: NotificationSubscriptionUsecase): Promise<void> => {
  const room = 'global';
  try {
    // poke cloud function
  } catch (error) {
    console.error(error);
  }
}

export default { subscribe };