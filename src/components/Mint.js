import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Mint = ({ provider, nft, cost, setIsLoading }) => {

	const mintHandler = async (e) => {
		e.preventDefault()
		console.log('minting...')
	}

	return(
		<Form onSubmit={mintHandler} style={{ maxWidth: '450px', margin: '50 ps auto' }}>
			<Form.Group>
				<Button variant="primary" type="submit" style={{ width: '100%' }}>
					Mint
				</Button>
			</Form.Group>
		</Form>
	)
}

export default Mint;