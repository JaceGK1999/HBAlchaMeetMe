const { render, getByRole, screen, getByText } = require('@testing-library/react')
const { default: Home } = require('./Home')

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render the user profile', async () => {
  render(<Home user={user} />)
  const img = screen.getByAltText('avatar')

  const name = screen.getByText('Vonta')

  const motto = screen.getByLabelText('motto')

  const headerImg = screen.getByAltText('header')

  const listItems = screen.getAllByRole('listitem')

  expect(listItems.length).toEqual(user.likes.length)

  user.likes.forEach((item) => screen.getByText(`${item}`))

  screen.getByText('Interests')
})
