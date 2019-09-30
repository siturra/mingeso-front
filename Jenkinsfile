pipeline {
    agent { dockerfile true }
    stages {
        stage('Test') {
            steps {
                sh 'docker push siturrausach/mingeso-front:latest'
            }
        }
    }
}
