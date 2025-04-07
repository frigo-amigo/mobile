// shared/lib/db/index.ts
import { User } from '@/entities/user/types';
import * as SQLite from 'expo-sqlite';
import { Product } from 'shared/types/product';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

// Открываем БД синхронно
const db = SQLite.openDatabaseSync('myApp.db');

// Инициализация БД
export const initDatabase = async (): Promise<void> => {
  try {
    await db.withTransactionAsync(async () => {
      await db.runAsync(
        `CREATE TABLE IF NOT EXISTS users (
          id TEXT PRIMARY KEY NOT NULL,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          avatar TEXT
        );`,
      );
      await db.runAsync(
        `CREATE TABLE IF NOT EXISTS products (
          id TEXT PRIMARY KEY NOT NULL,
          name TEXT NOT NULL,
          icon TEXT,
          category TEXT NOT NULL,
          quantity INTEGER NOT NULL,
          unit TEXT NOT NULL,
          minQuantity INTEGER NOT NULL,
          manufactureDate TEXT NOT NULL,
          expirationDate TEXT NOT NULL,
          storageDuration TEXT NOT NULL,
          userId TEXT NOT NULL,
          FOREIGN KEY (userId) REFERENCES users(id)
        );`,
      );
    });
  } catch (error) {
    console.error('Database initialization failed:', error);
    throw error;
  }
};

// Получение пользователя
export const getUser = async (): Promise<User> => {
  try {
    const result = await db.getFirstAsync<User>('SELECT * FROM users LIMIT 1;');
    if (result) {
      return result;
    } else {
      const mockUser: User = {
        id: '1',
        username: 'Иван',
        email: 'ivan.vanyaaa@example.com',
        avatar:
          'https://avatars.mds.yandex.net/i?id=31b2bf0850da1e7a6af9a680bf9f9a61_l-3600087-images-thumbs&n=13',
      };
      await insertUser(mockUser);
      return mockUser;
    }
  } catch (error) {
    console.error('Failed to get user:', error);
    throw error;
  }
};

// Добавление/обновление пользователя
export const insertUser = async (user: User): Promise<void> => {
  try {
    await db.withTransactionAsync(async () => {
      await db.runAsync(
        'INSERT OR REPLACE INTO users (id, name, email, avatar) VALUES (?, ?, ?, ?);',
        [user.id, user.username, user.email, user.avatar ?? null], // Приводим undefined к null
      );
    });
  } catch (error) {
    console.error('Failed to insert user:', error);
    throw error;
  }
};

// Обновление пользователя
export const updateUserDb = async (user: Partial<User> & { id: string }): Promise<void> => {
  try {
    await db.withTransactionAsync(async () => {
      await db.runAsync('UPDATE users SET name = ?, email = ?, avatar = ? WHERE id = ?;', [
        user.username ?? null, // Приводим undefined к null
        user.email ?? null, // Приводим undefined к null
        user.avatar ?? null, // Приводим undefined к null
        user.id,
      ]);
    });
  } catch (error) {
    console.error('Failed to update user:', error);
    throw error;
  }
};

// Добавление/обновление продукта
export const insertProduct = async (product: Product & { userId: string }): Promise<void> => {
  try {
    await db.withTransactionAsync(async () => {
      await db.runAsync(
        `INSERT OR REPLACE INTO products (
          id, name, icon, category, quantity, unit, minQuantity, 
          manufactureDate, expirationDate, storageDuration, userId
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
        [
          product.id,
          product.name,
          product.icon ?? null, // Приводим undefined к null
          product.category,
          product.quantity,
          product.unit,
          product.minQuantity,
          product.manufactureDate,
          product.expirationDate,
          product.storageDuration,
          product.userId,
        ],
      );
    });
  } catch (error) {
    console.error('Failed to insert product:', error);
    throw error;
  }
};

// Получение продуктов пользователя
export const getProducts = async (userId: string): Promise<Product[]> => {
  try {
    const result = await db.getAllAsync<Product>('SELECT * FROM products WHERE userId = ?;', [
      userId,
    ]);
    return result;
  } catch (error) {
    console.error('Failed to get products:', error);
    throw error;
  }
};

export const updateProduct = async (product: Product & { userId: string }): Promise<void> => {
  try {
    await db.withTransactionAsync(async () => {
      await db.runAsync(
        `UPDATE products SET 
          name = ?, icon = ?, category = ?, quantity = ?, unit = ?, 
          minQuantity = ?, manufactureDate = ?, expirationDate = ?, 
          storageDuration = ? WHERE id = ? AND userId = ?;`,
        [
          product.name,
          product.icon ?? null,
          product.category,
          product.quantity,
          product.unit,
          product.minQuantity,
          product.manufactureDate,
          product.expirationDate,
          product.id,
          product.userId,
        ],
      );
    });
  } catch (error) {
    console.error('Failed to update product:', error);
    throw error;
  }
};

export const deleteProduct = async (productId: string): Promise<void> => {
  try {
    await db.withTransactionAsync(async () => {
      await db.runAsync('DELETE FROM products WHERE id = ?;', [productId]);
    });
  } catch (error) {
    console.error('Failed to delete product:', error);
    throw error;
  }
};

// Функция для копирования бд с устройства
export const copyDatabaseToDocuments = async () => {
  try {
    const dbPath = `${FileSystem.documentDirectory}SQLite/myApp.db`; // Путь к базе в песочнице
    const destPath = `${FileSystem.documentDirectory}myApp.db`; // Путь для копии
    await FileSystem.copyAsync({ from: dbPath, to: destPath });
    // Дополнительно: делимся файлом для извлечения
    await Sharing.shareAsync(destPath);
    return destPath;
  } catch (error) {
    console.error('Failed to copy database:', error);
    throw error;
  }
};
