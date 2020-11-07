import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("booked.db");

export class DB {
  static init() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS directions (id INTEGER PRIMARY KEY NOT NULL, routeId TEXT)",
          [],
          resolve,
          (_, error) => reject(error)
        );
      });
    });
  }
  static getDirections() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM directions",
          [],
          (_, result) => resolve(result.rows._array),
          (_, error) => reject(error)
        );
      });
    });
  }
  static setDirectionId(id) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO directions (routeId) VALUES (?)`,
          [id],
          (_, result) => resolve(result.insertId),
          (_, error) => reject(error)
        );
      });
    });
  }
  static removeDirectionId(id) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `DELETE FROM directions WHERE routeId = ?`,
          [id],
          resolve,
          (_, error) => reject(error)
        );
      });
    });
  }
  static drop() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql("DROP TABLE directions", [], resolve, (_, error) =>
          reject(error)
        );
      });
    });
  }
}
export class StationTable {
  static init() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS stations (id INTEGER PRIMARY KEY NOT NULL, directionId TEXT, stopId TEXT)",
          [],
          resolve,
          (_, error) => reject(error)
        );
      });
    });
  }
  static getStations() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM stations",
          [],
          (_, result) => resolve(result.rows._array),
          (_, error) => reject(error)
        );
      });
    });
  }
  static setStationsData(directionId, stopId) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO stations (directionId, stopId) VALUES (?,?)`,
          [directionId, stopId],
          (_, result) => resolve(result.insertId),
          (_, error) => reject(error)
        );
      });
    });
  }
  static removeStation(stopId) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `DELETE FROM stations WHERE stopId = ?`,
          [stopId],
          resolve,
          (_, error) => reject(error)
        );
      });
    });
  }
  static drop() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql("DROP TABLE stations", [], resolve, (_, error) =>
          reject(error)
        );
      });
    });
  }
}
