pipeline {
    agent { dockerfile true }
  stages {
    stage('Build image') {
      dockerImage = docker.build("siturrausach/mingeso-front:tagname")
    }

    stage('Push image') {
      dockerImage.push()
    }


    stage('Deploy Image') {
      steps{
         script {
            dockerImage.push()
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
