export default (path) => {
  return [
    {
      uid: '0665f56d-3a09-4eb7-b187-554acf92fa08',
      imageUrl: `static/images/${path}/home_bg.jpg`,
      topic: 'Charoenkrung Road',
      desc: 'กรุงเจริญ = เจริญกรุง',
      posted_date: new Date(2017, 8, 20).toISOString()
    },
    {
      uid: '68ffa3c1-9e2a-44ab-b545-8dbb39bf680c',
      imageUrl: 'static/images/contents/bg_01.jpg',
      topic: 'Lalalala',
      desc: 'ลาลาลาลา',
      posted_date: new Date(2017, 8, 21).toISOString()
    },
    {
      uid: '187f08ba-6c44-42a4-8dd8-b356ed3a3c33',
      imageUrl: 'static/images/contents/bg_02.jpg',
      topic: 'Why Charoenkrung?',
      desc: 'ทำไมต้องเจริญกรุง',
      posted_date: new Date(2017, 8, 22).toISOString()
    },
    {
      uid: '804b24d3-9a1a-4192-8126-bd1d45998a90',
      imageUrl: 'static/images/contents/bg_03.jpg',
      topic: 'Everything has its first time...',
      desc: 'ครั้งแรกของ TED',
      posted_date: new Date(2017, 8, 23).toISOString()
    }].sort((a, b) => {
      const dateA = new Date(a.posted_date),
        dateB = new Date(b.posted_date);
      // Compare the 2 dates
      return ((dateA < dateB) ? -1 : ((dateA > dateB) ? 1 : 0));
    })
}
