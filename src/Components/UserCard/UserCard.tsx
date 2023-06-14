import { Container, MainContainer, Button, UserCardContainer, P, ImageContainer, BoyImg, LineImg, LogoImg } from "./UserCard.styled";
import logo from '../../images/Vector.svg'
import downLogo from '../../images/DownLogo.svg'
import boy from '../../images/Boy.svg'
import line from '../../images/Line.svg'
import { IData } from "../../types";
import { useEffect, useState } from "react";
import axios from 'axios'
import numeral from 'numeral';
const getData = async (page: number) => {
    const url = new URL('https://6489ef245fa58521cab07cfe.mockapi.io/api/task//users');
    url.searchParams.append('page', page.toString());
    url.searchParams.append('limit', '3');
    try {
        const response = await axios.get(url.toString());
        return response;
    } catch (error) {
        console.log(error);
    }

}
const updateData = async (data: IData[], id: string): Promise<void> => {
    try {
        const index = data.findIndex(item => item.id === id);
        await axios.put(`https://6489ef245fa58521cab07cfe.mockapi.io/api/task//users/${id}`, data[index]);
    } catch (error) {
        console.log('Помилка оновлення:', error);
    }
}
const folowers = (num: number): string => {
    const formattedNumber = numeral(num).format('0,0');
    return "" + formattedNumber;
}
const UserCard = () => {
    const [w8, setW8] = useState(false);
    const [data, setData] = useState<IData[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    useEffect(() => {
        getData(currentPage).then((response) => {
            const responseData = response?.data || [];
            if (currentPage !== 1) {
                setData(prev => [...prev, ...responseData]);
            } else {
                setData(responseData);
            }
            const totalPages = Math.ceil(12 / 3);
            setTotalPages(totalPages);
        });
    }, [currentPage]);

    const onClick = async (id: string, falg: string) => {
        if (w8) return;
        setW8(true);

        const index = data.findIndex(item => item.id === id);
        const newArr: IData[] = data.filter(item => item.id === id);
        for (let i = 0; i < newArr.length; i++) {
            falg === 'inc' ? newArr[i].followers++ : newArr[i].followers--;
        }
        setData([...data.slice(0, index), ...newArr, ...data.slice(index + 1)]);
        await updateData(data, id);
        return setW8(false);
    }
    const onLoadMore = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    }
    return <MainContainer>
        {data.length > 0 ? data.map(item => <Container key={item.id}>
            <UserCardContainer>
                <LogoImg src={logo} alt="logo" />
                <img src={downLogo} alt="downlogo" />
                <ImageContainer>
                    <BoyImg src={boy} alt="boy" />
                    <LineImg src={line} alt="line" />
                </ImageContainer>
                <P>{item.tweets} Tweets</P>
                <P>{folowers(item.followers)} followers</P>
                <Button primary={item.followers === 150000 ? true : false} onClick={() => onClick(item.id, item.followers === 150000 ? 'inc' : 'dec')} type="button">{item.followers === 150000 ? 'Follow' : 'following'}</Button>
            </UserCardContainer>
        </Container>) : null}
        {currentPage < totalPages && (
            <Button primary={false} onClick={onLoadMore}>
                Load More
            </Button>
        )}
    </MainContainer>
}

export default UserCard;