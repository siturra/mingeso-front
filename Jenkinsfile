pipeline {
    agent { dockerfile true }
  stages {

    stage('Deploy Image') {
      steps{
         script {
            dockerImage.push()
         }
      }
    }

  }
}
