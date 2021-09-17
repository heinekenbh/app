import React from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import { PageContainer, Subtitle, MarginTop, ListItem } from '../styles/global'
import {
  PendentOrdersContainer,
  PendentOrderTitle,
  PendentOrderInfo,
  PendentOrderPrice,
  NoPendentOrdersFoundText,
} from '../styles/pages/RestaurantDashboardPage'

import { OrderModel } from '../models/OrderModel'

const RestaurantDashboardPage: React.FC = () => {
  const pendentOrders: OrderModel[] = [
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

  const renderItem = ({ item }: ListRenderItemInfo<OrderModel>) => (
    <ListItem>
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
    </ListItem>
  )

  return (
    <PageContainer>
      <PendentOrdersContainer>
        <Subtitle>Pedidos pendentes</Subtitle>
        <MarginTop />
        {pendentOrders.length > 0 ? (
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
