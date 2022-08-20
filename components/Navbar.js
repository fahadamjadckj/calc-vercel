import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import Typography from '@mui/material/Typography'
import TagFacesIcon from '@mui/icons-material/TagFaces'
import PetsIcon from '@mui/icons-material/Pets'

function Navbar() {
  return (
    <div>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <IconButton
          onClick={() => (window.location.href = 'http://localhost:3000')}
        >
          <TagFacesIcon />
        </IconButton>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {'Hello '}
          <PetsIcon />
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
    </div>
  )
}

export default Navbar
