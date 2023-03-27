package gov.co.msconvocatorias.config;

import javax.sql.DataSource;

import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
//@ComponentScan
//@EnableJpaRepositories
public class DataSourceConfig {
	@Bean
    public DataSource getDataSource() {
        return DataSourceBuilder.create()
          .driverClassName("org.postgresql.Driver")
          .url("jdbc:postgresql://37.44.247.214:5432/convocatorias_db")
          .username("postgres")
          .password("C\"rolina2103")
          .build();	
    }
}
