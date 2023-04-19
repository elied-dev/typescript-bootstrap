export interface AppConfiguration {
  nodeEnv: string;
  appPort: number;

  logConfig: LoggingConfiguration;

  metricsConfig: MetricsConfiguration;
}

export interface LoggingConfiguration {
  logLevel: string;
  prettify: boolean;
}

export type MetricsConfiguration = {
  metricsPort: number;
  metricsPrefix: string;
};
