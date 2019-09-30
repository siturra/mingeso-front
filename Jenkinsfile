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
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
  }
}
