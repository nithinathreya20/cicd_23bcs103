pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/nithinathreya20/cicd_23bcs103.git'
            }
        }

        stage('Build Images') {
            steps {
                sh 'docker build -t 2023bcs0103nithin/2023bcs0103_backend ./backend'
                sh 'docker build -t 2023bcs0103nithin/2023bcs0103_frontend ./frontend'
            }
        }

        stage('Push Images') {
            steps {
                withDockerRegistry([credentialsId: 'dockerhub', url: '']) {
                    sh 'docker push 2023bcs0103nithin/2023bcs0103_backend'
                    sh 'docker push 2023bcs0103nithin/2023bcs0103_frontend'
                }
            }
        }
    }
}