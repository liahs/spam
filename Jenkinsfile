
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'     // Install project dependencies using npm
            }
        }
        stage('Deploy') {
            steps {
                sh 'npm start' 
                // Deploy your Node.js application to your target environment
                // This could involve copying files, deploying to a server, etc.
                // Example: sh 'scp -r ./dist/* user@server:/path/to/deploy'
            }
        }
    }
}
