export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  maxConnections: number;
  idleTimeoutMillis: number;
}

export const dbConfig: DatabaseConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  database: process.env.DB_NAME || 'orchestrator_prod',
  maxConnections: 25,
  idleTimeoutMillis: 30000,
};
  // Adjusted pool bounds
  // Adjusted pool bounds
  // Adjusted pool bounds
  // Adjusted pool bounds
  // Adjusted pool bounds
  // Adjusted pool bounds
  // Adjusted pool bounds
  // Adjusted pool bounds
  // Adjusted pool bounds
  // Adjusted pool bounds
  // Adjusted pool bounds
  // Adjusted pool bounds
  // Adjusted pool bounds
  // Adjusted pool bounds
  // Adjusted pool bounds
  // Adjusted pool bounds
  // Adjusted pool bounds
  // Adjusted pool bounds
  // Adjusted pool bounds
  // Adjusted pool bounds
  // Adjusted pool bounds
  // Adjusted pool bounds
  // Adjusted pool bounds
  // Adjusted pool bounds
  // Adjusted pool bounds
  // Adjusted pool bounds
  // Adjusted pool bounds
  // Adjusted pool bounds
