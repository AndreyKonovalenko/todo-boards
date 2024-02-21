import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useUserStore } from '../../services/user/user-store';
import { LOGIN_ROUTE } from '../../utils/constants';
import { useEffect } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const fetchUser = async () => {
  const response = await fetch(LOGIN_ROUTE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'test3',
      password: 'test111',
    }),
  });
  return response.json();
};

const MainPage = () => {
  const { setUser } = useUserStore();

  const { data } = useQuery({ queryKey: ['groups'], queryFn: fetchUser });

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data, setUser]);

  return (
    <Stack
      mt={6}
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      justifyContent='center'>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
  );
};
export default MainPage;
