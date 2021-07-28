import React from 'react'
import { Dropdown,Menu, Image } from 'semantic-ui-react'

export default function SignedIn(signOut) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://i2.cnnturk.com/i/cnnturk/75/400x0/584e768df0dc1e384c6f362a.jpg"/>
                <Dropdown pointing="top left" text="Engin">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
