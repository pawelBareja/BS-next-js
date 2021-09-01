import Link from 'next/link'
export default function Copyright() {
	const today = new Date()
	return (
		<div>	<div className='links'><Link href="/privacy-policy"><span  className='links__link'>Privacy Policy</span></Link></div>
			<p data-testid="copyright">&copy; 2018 - { today.getFullYear()} Bareja Studio All Rights Reserved</p>
		
			<style jsx>
				{`
				.links{
					text-align: center;
					padding:20px 0 5px;
					font-size: 12px;
					line-height:1.3;
				}
				.links__link {
					font-size: 12px;
					line-height:1.3;
			
				}
                 p {
					font-size: 12px;
					text-align: center;
					line-height:1.3;
					margin-top:0;
                 }
        `}
			</style>
		</div>
	)
}
