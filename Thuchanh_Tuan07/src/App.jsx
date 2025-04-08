
import './App.css'
import { FolderOutlined, DownloadOutlined, ImportOutlined, MessageOutlined, InteractionOutlined, PieChartOutlined, BorderOuterOutlined, TeamOutlined, BellOutlined, QuestionOutlined} from '@ant-design/icons';
import { Avatar, Button, Image, Input, Menu, Space, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';

const items = [
  {
    key: 'sub1',
    label: 'Dashboard',
    icon: <BorderOuterOutlined />
  },
  {
    key: 'sub2',
    label: 'Projects',
    icon: <FolderOutlined />
  },
  {
    key: 'sub4',
    label: 'Teams',
    icon: <TeamOutlined />
  },
  {
    key: 'grp',
    label: 'Analytics',
    icon: <PieChartOutlined />
  },
  {
    key: 'grp1',
    label: 'Messages',
    icon: <MessageOutlined />
  },
  {
    key: 'grp2',
    label: 'Integrations',
    icon: <InteractionOutlined />
  },
];

const columns = [
  {
    title: 'CUSTOMER NAME',
    dataIndex: 'name',
    key: 'name',
    render: (_, { name, image }) => (
      <>
        <div className='flex items-center'>
          <Image src={image} preview={false} />
          <h2 className='ml-4'>{name}</h2>
        </div>
      </>
    ),
  },
  {
    title: 'COMPANY',
    dataIndex: 'company',
    key: 'company',
  },
  {
    title: 'ORDER VALUE',
    dataIndex: 'orderValue',
    key: 'orderValue',
    render: (_, { orderValue }) => (
      <>
        {"$" + orderValue}
      </>
    ),
  },
  {
    title: 'ORDER DATE',
    key: 'orderDate',
    dataIndex: 'orderDate',
  },
  {
    title: 'STATUS',
    key: 'status',
    render: (_, { status }) => (
      <>
      {status === "New" && 
        <Tag color="blue">
          {status}
        </Tag> 
      }
       {status === "In-progress" && 
        <Tag color="yellow">
          {status}
        </Tag> 
      }
       {status === "Completed" && 
        <Tag color="green">
          {status}
        </Tag> 
      }
      </>
    ),
  },
  {
    title: '',
    key: 'action',
    render: (_, record) => (
      <Image src='public/create.png' preview={false} />
    ),
  },
];

function App() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [persons, setPersons] = useState([]);

  

  useEffect(() => {
    const fetchApiCustomer = async () => {
      const dataJson = await fetch('http://localhost:3000/customer')
        .then(res => res.json());
      
        setPersons(dataJson);
    }
    fetchApiCustomer();
  }, [])

  const onSelectChange = newSelectedRowKeys => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const data = persons?.map(person => (
    {
      key: person.id,
      name: person.name,
      company: person.company,
      orderValue: person.orderValue,
      orderDate: person.orderDate,
      status: person.status,
      image: person.image
    }
  ));



  return (
    <>
    <div className='grid grid-flow-row grid-cols-12'>
      <div className='col-span-2 border-r-2 border-solid border-slate-100'>
        <div className='flex items-center py-3 ml-5'>
          <Image preview={false} src='public/Image 1858.png' />
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
        />
        <div className='mt-10 flex items-center justify-center'>
          <div className='py-5 text-center px-3 bg-blue-100'>
            <Image preview={false} src='public/Group.png' />
            <h1 className='mt-2 font-bold text-lg'>V2.0 is available</h1>
            <Button className='w-full mt-2'>Try now</Button>
          </div>
        </div>
      </div>
      <div className='col-span-10'>
        <header className='flex items-center py-3 px-5 border-b-2 border-solid border-slate-100 justify-between'>
          <h1 className='text-2xl text-pink-400 font-bold'>Dashboard</h1>
          <div className='w-1/3 flex items-center justify-center'>
            <Input.Search className='mx-2' placeholder='Search...' />
            <BellOutlined className='mx-2' />
            <QuestionOutlined className='mx-2' />
            <Image preview={false} className='mx-2' src="public/Avatar.png" />
          </div>
        </header>
        <div className='mx-5 my-5'>
            <h2 className='font-bold text-xl'>
              <BorderOuterOutlined className='!text-pink-500 mr-2'/>
              Overview
            </h2>
            <div className='grid grid-cols-12 grid-flow-row gap-5 mt-5'>
              <div className='col-span-4 rounded-lg bg-pink-50 py-4 px-3'>
                  <div className='flex justify-between'>
                    <div>
                      <h5 className='text-lg font-semibold'>Turnover</h5>
                      <h2 className='text-3xl mt-2 font-bold'>$92,405</h2>
                      <p className='text-slate-600 mt-3 text-sm'>
                        <span className='text-green-700 font-bold'>5.39% </span>
                        period of change
                      </p>
                    </div>
                    <Image preview={false} src='public/Button 1509 (2).png' />
                  </div>
              </div>
              <div className='col-span-4 rounded-lg bg-blue-50 py-4 px-3'>
                  <div className='flex justify-between'>
                    <div>
                      <h5 className='text-lg font-semibold'>Profit</h5>
                      <h2 className='text-3xl mt-2 font-bold'>$32,218</h2>
                      <p className='text-slate-600 mt-3 text-sm'>
                        <span className='text-green-700 font-bold'>5.39% </span>
                        period of change
                      </p>
                    </div>
                    <Image preview={false} src='public/Button 1529.png' />
                  </div>
              </div>
              <div className='col-span-4 rounded-lg bg-blue-50 py-4 px-3'>
                  <div className='flex justify-between'>
                    <div>
                      <h5 className='text-lg font-semibold'>New customer</h5>
                      <h2 className='text-3xl mt-2 font-bold'>298</h2>
                      <p className='text-slate-600 mt-3 text-sm'>
                        <span className='text-green-700 font-bold'>6.34% </span>
                        period of change
                      </p>
                    </div>
                    <Image preview={false} src='public/Button 1530.png' />
                  </div>
              </div>
            </div>
        </div>
        <div className='mx-5 my-5 flex items-center justify-between'>
            <h2 className='font-bold text-xl'>
              <Image className='!w-5 !text-pink-500 mr-2' preview={false} src='public/File text 1.png' />
              Detailed report
            </h2>
           <div className='flex items-center gap-3'>
            <Button className='!text-pink-500 !outline-pink-500' icon={<ImportOutlined />}>Import</Button>
            <Button className='!text-pink-500 !outline-pink-500' icon={<DownloadOutlined />}>Export</Button>
           </div>
        </div>
        <div className='mx-5'>
          <Table pagination={{pageSize: 4}} rowSelection={rowSelection} columns={columns} dataSource={data} />

        </div>
      </div>


    </div>

    </>
  )
}

export default App
