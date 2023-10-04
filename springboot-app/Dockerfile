#FROM openjdk:8-jdk-alpine
FROM adoptopenjdk/openjdk11:latest
# Set the working directory inside the container
WORKDIR /app
# Copy the Maven POM file and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline
# Copy the application source code
COPY src ./src
# Build the Spring Boot application
RUN mvn clean package
EXPOSE 8081
ADD target/spring-boot-jacoco.jar spring-boot-jacoco.jar
ENTRYPOINT ["java","-jar","/spring-boot-jacoco.jar"]
