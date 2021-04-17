const templates = {
  pdf: [
    {
      id: 1,
      location: 't2.pdf',
      type: 'pdf',
      text: [
        {
          title: 'Abhishek Kumar Ji',
          x: 220,
          y: 360,
          size: 50
        }
      ]
    }
  ],
  png: [
    {
      id: 2,
      location: 't1.png',
      type: 'png',
      text: [
        {
          title: 'Field 1',
          x: 289,
          y: 200,
          size: 37,
          font: 'Montserrat',
          color: 'white'
        },
        {
          title: 'Field 2',
          x: 340,
          y: 440,
          size: 18,
          font: 'Montserrat',
          color: 'white'
        },
        {
          title: 'Field 3',
          x: 560,
          y: 440,
          size: 18,
          font: 'Montserrat',
          color: 'white'
        }
      ]
    }
  ]
}

export default templates
