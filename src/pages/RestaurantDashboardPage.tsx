import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, ListRenderItemInfo } from 'react-native'

import theme from '../styles/theme'
import resolveException from '../hooks/resolveException'
import {
  PageContainer,
  Subtitle,
  MarginTop,
  ListItem,
  ListItemInfo,
  Center,
} from '../styles/global'
import {
  PendentOrdersContainer,
  PendentOrderTitle,
  PendentOrderInfo,
  PendentOrderPrice,
  NoPendentOrdersFoundText,
} from '../styles/pages/RestaurantDashboardPage'

import { OrderModel } from '../models/OrderModel'

const RestaurantDashboardPage: React.FC = () => {
  const pendentOrdersData: OrderModel[] = [
    {
      id: '1',
      name: 'Prato Feito Pequeno',
      qty: 1,
      unitPrice: 13,
      notes: 'Sem salada',
    },
    {
      id: '2',
      name: 'Prato Feito Pequeno',
      qty: 5,
      unitPrice: 13,
    },
    {
      id: '3',
      name: 'Prato Feito Pequeno',
      qty: 2,
      unitPrice: 13,
    },
    {
      id: '4',
      name: 'Prato Feito Pequeno',
      qty: 1,
      unitPrice: 13,
      notes: 'Sem feijão',
    },
  ]

  const [pendentOrders, setPendentOrders] = useState<OrderModel[]>([])
  const [loadingPendentOrders, setLoadingPendentOrders] = useState(true)

  const loadPendentOrders = async (): Promise<void> => {
    try {
      setPendentOrders(pendentOrdersData || [])
      setLoadingPendentOrders(false)
    } catch (err) {
      resolveException(err as Error)
    }
  }

  useEffect(() => {
    loadPendentOrders()
  }, [])

  const renderItem = ({ item }: ListRenderItemInfo<OrderModel>) => (
    <ListItem>
      <ListItemInfo>
        <PendentOrderTitle>{item.name}</PendentOrderTitle>
        {item.notes && (
          <PendentOrderInfo>
            Observações: {'\n\t'}
            {item.notes}
          </PendentOrderInfo>
        )}
        <PendentOrderPrice>
          R$ {(item.unitPrice * item.qty).toFixed(2)}
        </PendentOrderPrice>
      </ListItemInfo>
    </ListItem>
  )

  return (
    <PageContainer>
      <PendentOrdersContainer>
        <Subtitle>Pedidos pendentes</Subtitle>
        <MarginTop />
        {loadingPendentOrders ? (
          <ActivityIndicator size="large" color={theme.primary} />
        ) : pendentOrders.length > 0 ? (
          <FlatList<OrderModel>
            data={pendentOrders}
            keyExtractor={({ id }) => id}
            renderItem={renderItem}
          />
        ) : (
          <NoPendentOrdersFoundText>
            Nenhum pedido pendente.
          </NoPendentOrdersFoundText>
        )}
      </PendentOrdersContainer>
    </PageContainer>
  )
}

export default RestaurantDashboardPage
