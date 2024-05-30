import BudgetForm from '../components/BudgetForm'

export default function Budget() {
  return (
    <div className='flex flex-col items-center w-[400px] h-[100vh] justify-center border-2'>
      <h1 className='text-lg mb-5 text-gray-800 text-left'> 
        Input Your <strong className='text-green-500'>Budget Limit</strong> Here
    </h1>  
      <BudgetForm />
    </div>
  )
}
