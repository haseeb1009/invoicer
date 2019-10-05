// libs
import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import AppBar from '@material-ui/core/AppBar'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import MuiToolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'

// src
import { useStyles } from './Toolbar.styles'

type Props = RouteComponentProps & {
  onClick: (action: string) => void,
}

type ToolbarButtonProps = {
  icon: string,
  tooltip: string,
  onClick: Function,
}

const ToolbarButton = ({ icon, onClick, tooltip }: ToolbarButtonProps) => {
  const styles = useStyles({})
  return (
    <Tooltip title={tooltip || iconType} placement="bottom">
      <IconButton
        className={styles.button}
        color="inherit"
        size="small"
        onClick={onClick}
      >
        <Icon fontSize="inherit">{icon}</Icon>
      </IconButton>
    </Tooltip>
  )
}

export function ToolbarWithRouter(props: Props) {
  const styles = useStyles({})
  const {
    match: { path },
    onClick,
  } = props

  return (
    <AppBar className={styles.root} position="sticky">
      <MuiToolbar variant="dense" className="dontPrint">
        <h1 className={styles.title}>React Invoicer</h1>
        <ToolbarButton
          icon="cloud_download"
          tooltip="Download"
          onClick={() => onClick('download')}
        />
        {path === '/' && (
          <ToolbarButton
            icon="save"
            tooltip="Save"
            onClick={() => onClick('save')}
          />
        )}
        <ToolbarButton
          icon="print"
          tooltip="Print"
          onClick={() => onClick('print')}
        />
        <ToolbarButton
          icon="email"
          tooltip="Email"
          onClick={() => onClick('email')}
        />
        <ToolbarButton
          icon="share"
          tooltip="Share"
          onClick={() => onClick('share')}
        />
      </MuiToolbar>
    </AppBar>
  )
}

export const Toolbar = withRouter(ToolbarWithRouter)
