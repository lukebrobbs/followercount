export const reflect = <T = any>(
    promise: Promise<T>,
): Promise<
    | {
          status: 'fulfilled';
          value: T;
      }
    | {
          status: 'rejected';
          reason: any;
      }
> => {
    return promise.then(
        v => {
            return { status: 'fulfilled', value: v };
        },
        error => {
            return { status: 'rejected', reason: error };
        },
    );
};
