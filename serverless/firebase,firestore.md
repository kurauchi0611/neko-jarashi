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
    - students
      - grade: number
      - attendance: number
      - numberOfTimes: number

- notifications

  - notificationId: string
    - name: string
    - body: string
    - time: string
    - url: string
