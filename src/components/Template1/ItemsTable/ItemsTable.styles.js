// libs
import makeStyles from '@material-ui/styles/makeStyles'

export const useStyles = makeStyles({
  root: {
    '& table': {
      width: '100%',
      margin: '5px 0',
    },

    '& thead': {
      backgroundColor: '#e3e3e3',
      '& th': {
        fontSize: '12px',
        textTransform: 'uppercase',
        padding: '6px 4px',
        color: '#858585',
        fontWeight: '700',
      },
    },

    '& tbody': {
      '& th': {
        padding: '11px 4px',
      },
    },

    '& td': {
      padding: '10px 4px',
    },
  },
  deleteIcon: {
    fontSize: 16,
    color: '#e00707',
  },
  addRow: {
    color: '#0078c3',
    cursor: 'pointer',
  },
  iconButton: {
    padding: '8px',
  },
})
