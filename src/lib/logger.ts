type LogLevel = "debug" | "info" | "warn" | "error";

class Logger {
  private isProd = process.env.NODE_ENV === "production";

  private log(level: LogLevel, message: string, meta?: Record<string, unknown>) {
    const timestamp = new Date().toISOString();
    const payload = {
      timestamp,
      level,
      message,
      ...(meta && { meta }),
    };

    if (this.isProd) {
      // In production, we write structured JSON log lines
      if (level === "error" || level === "warn") {
        console.error(JSON.stringify(payload));
      } else {
        console.info(JSON.stringify(payload));
      }
    } else {
      // In development, we use colored tags for easier console scanning
      const colors = {
        debug: "\x1b[36m", // Cyan
        info: "\x1b[32m",  // Green
        warn: "\x1b[33m",  // Yellow
        error: "\x1b[31m", // Red
      };
      const reset = "\x1b[0m";
      const color = colors[level] || "";
      
      const metaString = meta ? "\n" + JSON.stringify(meta, null, 2) : "";
      
      if (level === "error") {
        console.error(`[${timestamp}] ${color}${level.toUpperCase()}${reset}: ${message}`, metaString);
      } else if (level === "warn") {
        console.warn(`[${timestamp}] ${color}${level.toUpperCase()}${reset}: ${message}`, metaString);
      } else {
        console.info(`[${timestamp}] ${color}${level.toUpperCase()}${reset}: ${message}`, metaString);
      }
    }
  }

  debug(message: string, meta?: Record<string, unknown>) {
    if (!this.isProd) {
      this.log("debug", message, meta);
    }
  }

  info(message: string, meta?: Record<string, unknown>) {
    this.log("info", message, meta);
  }

  warn(message: string, meta?: Record<string, unknown>) {
    this.log("warn", message, meta);
  }

  error(message: string, error?: Error | unknown, meta?: Record<string, unknown>) {
    const errorDetails = error instanceof Error 
      ? { name: error.name, message: error.message, stack: error.stack }
      : error;

    this.log("error", message, {
      ...meta,
      error: errorDetails,
    });
  }
}

export const logger = new Logger();
export type { LogLevel };
