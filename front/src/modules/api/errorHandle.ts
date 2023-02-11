export type CreateDecoratorAction<T> = (
  self: T,
  originalMethod: Function,
  ...args: any[]
) => Promise<void> | void;
export function createDecorator<T = any>(action: CreateDecoratorAction<T>) {
  return (target: T, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value; // ссылка на оригинальный метод класса
    // переопределяем метод класса
    descriptor.value = async function (...args: any[]) {
      const _this = this as T;
      await action(_this, originalMethod, ...args);
    };
  };
}
export const errorHandle = () =>
  createDecorator(async (self, method, args) => {
    console.log(args);
    try {
      return await method.call(self, ...args);
    } catch (error) {
      console.log(error);
    }
  });
