- users

  ## 生徒側

  - userId: number
    - attendanceNumber: number
    - class: string
    - job: string
    - name: string
    - subject: {classRoom: string, subNumb: string, subStr: string}[]
    - isFcm: boolean
    - fcmToken: string

  ## 先生側

  - userId: number
    - classMember
      - classId: string
        - member: {name: string, studentNumber: string}[]
    - class: string[]
    - job: string
    - name: string

- subjects

  - subNum: string
    - students: subCole
      - grade: number
      - attendance: number
      - numberOfTimes: number
      - createdAt: timestamp
      - updatedAt: timestamp
    - name: string
    - teaher:

- notifications

  - notificationId: string
    - title: string
    - body: string
    - url: string
    - teacher: string
    - uid
    - isPost: boolean
    - createdAt: timestamp
    - updatedAt: timestamp
